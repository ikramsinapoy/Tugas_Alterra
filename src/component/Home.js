import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import {
  gql,
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";

const query = gql`
  query MyQuery {
    anggota {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const queryDeleteByID = gql`
  mutation MyMutation($_eq: Int = 10) {
    delete_anggota(where: { id: { _eq: $_eq } }) {
      returning {
        id
      }
    }
  }
`;

const queryInsert = gql`
  mutation MyMutation($jenisKelamin: String!, $nama: String!, $umur: Int!) {
    insert_anggota_one(
      object: { jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur }
    ) {
      nama
      umur
      jenisKelamin
    }
  }
`;

const subsList = gql`
  subscription MySubscription {
    anggota {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

function Home(props) {
  // const { data } = useQuery(query);
  const { data, loading } = useSubscription(subsList);
  const [deleteByID, { data: dataDeleteByID }] = useMutation(queryDeleteByID);
  const [insertAnggota, { data: insert }] = useMutation(queryInsert);
  const [state, setState] = useState({
    nama: "",
    umur: 0,
    jenisKelamin: "",
  });

  const hapusPengunjung = (id) => {
    deleteByID({
      variables: {
        _eq: id,
      },
    });
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertAnggota({
      variables: {
        nama: state.nama,
        umur: state.umur,
        jenisKelamin: state.jenisKelamin,
      },
    });

    setState({
      ...state,
      nama: "",
      umur: 0,
      jenisKelamin: "",
    });
  };

  return (
    <div>
      <div>
        <Header />
        <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
      </div>

      <div onSubmit={handleSubmit}>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama anda ..."
          value={state.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur anda ..."
          value={state.umur}
          name="umur"
          onChange={onChange}
        />
        {state.jenisKelamin}
        <p>Masukkan Jenis Kelamin Anda</p>
        <select
          onChange={onChange}
          value={state.jenisKelamin}
          name="jenisKelamin"
        >
          <option disabled value="">
            select
          </option>
          <option value="L">Pria</option>
          <option value="P">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Home;

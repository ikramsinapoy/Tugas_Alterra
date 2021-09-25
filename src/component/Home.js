import { useState } from "react";
import FilterGender from "./Filter";
import FilterID from "./FilterID";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useMutation, useSubscription } from "@apollo/client";
import PassengerInput from "./PassengerInput";

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

const updateData = gql`
  mutation MyMutation(
    $id: Int = 10
    $nama: String!
    $umur: Int!
    $jenisKelamin: String!
  ) {
    update_anggota_by_pk(
      pk_columns: { id: $id }
      _set: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }
    ) {
      nama
      umur
      jenisKelamin
    }
  }
`;

const showGender = gql`
  subscription MySubscription($_eq: String!) {
    anggota(where: { jenisKelamin: { _eq: $_eq } }) {
      nama
      umur
      jenisKelamin
    }
  }
`;

const showById = gql`
  subscription MySubscription($_eq: Int = 10) {
    anggota(where: { id: { _eq: $_eq } }) {
      nama
      umur
      jenisKelamin
    }
  }
`;

function Home(props) {
  const [fitlerGender, setfitlerGender] = useState("");
  const [filterID, setFilterID] = useState(0);
  const { data, loading } = useSubscription(subsList);
  const { data: filterGender, loading: loadingGender } = useSubscription(
    showGender,
    {
      variables: { _eq: fitlerGender },
    }
  );

  const { data: filterId, loading: loadingID } = useSubscription(showById, {
    variables: { _eq: filterID },
  });
  const [updateUser, { loading: loadingUpdate }] = useMutation(updateData);
  const [deleteByID, { data: dataDeleteByID, loading: loadingDelete }] =
    useMutation(queryDeleteByID);

  const [insertAnggota, { data: insert, loading: loadingInsert }] =
    useMutation(queryInsert);

  // if (
  //   loadingDelete ||
  //   loadingID ||
  //   loadingInsert ||
  //   loadingUpdate ||
  //   loadingGender
  // ) {
  //   return "Loading...";
  // }

  const onChangeGender = (e) => {
    if (e.target) {
      setfitlerGender(e.target.value);
    }
  };

  const onChangeID = (e) => {
    if (e.target) {
      setFilterID(e.target.value);
    }
  };
  const editPengunjung = (idx) => {
    const item = data?.anggota.find((v) => v.id === idx);
    const gantinama = prompt("Masukkan nama", item.nama);
    const gantiGender = prompt("Masukkan Jenis Kelamin", item.jenisKelamin);
    const gantiumur = prompt("Masukkan umur", item.umur);
    if (gantinama) {
      updateUser({
        variables: {
          id: idx,
          nama: gantinama,
          umur: gantiumur,
          jenisKelamin: gantiGender,
        },
      });

      setTimeout(() => {
        alert("DATA BERHASIL DIUBAH");
      }, 1000);
    }
  };

  const hapusPengunjung = (id) => {
    deleteByID({
      variables: {
        _eq: id,
      },
    });
  };

  return (
    <div>
      <div>
        <Header />

        {loading ? (
          <p>loading...</p>
        ) : (
          <ListPassenger
            data={data}
            hapusPengunjung={hapusPengunjung}
            editPengunjung={editPengunjung}
          />
        )}
        <PassengerInput insertPengunjung={insertAnggota} />

        <h3>Filter Pengunjung</h3>
        <select onChange={onChangeGender} value={fitlerGender}>
          <option value="">Select</option>
          <option value="L">Pria</option>
          <option value="P">Wanita</option>
        </select>

        <input onChange={onChangeID} />
        <button onClick={filterID}>Get ID</button>
        <FilterGender data={filterGender} />
        <FilterID data={filterId} />
      </div>
    </div>
  );
}

export default Home;

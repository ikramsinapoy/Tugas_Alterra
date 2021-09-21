import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

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

const jenisKelamin = gql`
  query MyQuery {
    anggota(where: { jenisKelamin: { _eq: "L" } }) {
      nama
      umur
    }
  }
`;

function Home(props) {
  const [show, setShow] = useState([]);
  const { dataq } = useQuery(query);
  const [getJeniskelamin, { dataJenis, loading: tunggu }] =
    useLazyQuery(jenisKelamin);
  const [data, setData] = useState([
    {
      id: uuidv4(),
      nama: "Yoga",
      umur: 22,
      jenisKelamin: "Pria",
    },
    {
      id: uuidv4(),
      nama: "Ria",
      umur: 19,
      jenisKelamin: "Wanita",
    },
    {
      id: uuidv4(),
      nama: "Fahmi",
      umur: 25,
      jenisKelamin: "Pria",
    },
    {
      id: uuidv4(),
      nama: "Lala",
      umur: 21,
      jenisKelamin: "Wanita",
    },
    {
      id: uuidv4(),
      nama: "Ivan",
      umur: 25,
      jenisKelamin: "Pria",
    },
  ]);

  const hapusPengunjung = (id) => {
    const hapus = [...data].filter((item) => item.id !== id);
    setData(hapus);
  };

  const tambahPengunjung = (newUser) => {
    const newData = [newUser, ...data];

    setData(newData);
  };

  return (
    <div>
      <div>
        <Header />
        <button onClick={getJeniskelamin}>GET jenisKelamin</button>
        <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
        <PassengerInput tambahPengunjung={tambahPengunjung} />
      </div>
    </div>
  );
}

export default Home;

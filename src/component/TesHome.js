import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";

function Home(props) {
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
      <Header />
      <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}
// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           id: uuidv4(),
//           nama: "Yoga",
//           umur: 22,
//           jenisKelamin: "Pria",
//         },
//         {
//           id: uuidv4(),
//           nama: "Ria",
//           umur: 19,
//           jenisKelamin: "Wanita",
//         },
//         {
//           id: uuidv4(),
//           nama: "Fahmi",
//           umur: 25,
//           jenisKelamin: "Pria",
//         },
//         {
//           id: uuidv4(),
//           nama: "Lala",
//           umur: 21,
//           jenisKelamin: "Wanita",
//         },
//         {
//           id: uuidv4(),
//           nama: "Ivan",
//           umur: 25,
//           jenisKelamin: "Pria",
//         },
//       ],
//     };
//   }

//   render() {

//   }
// }

export default Home;

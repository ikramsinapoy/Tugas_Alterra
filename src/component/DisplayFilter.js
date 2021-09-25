import "./Home.css";
const ListIFilter = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;

  return (
    <tr>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
    </tr>
  );
};

export default ListIFilter;

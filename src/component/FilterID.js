import ListIFilter from "./DisplayFilter";

const FilterID = (props) => {
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        {/* <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead> */}
        {props.data?.anggota.map((item) => (
          <ListIFilter key={item.id} data={item} />
        ))}
      </table>
    </div>
  );
};

export default FilterID;

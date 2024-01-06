function Share() {
  const country = ["Ethiopia", "China", "Canada", "Brazil", "Russia"];
  
  return (
    <>
      <h1>list of Country</h1>
      <ul className="list-group">
        {country.map((item) => <li>{item}</li>)}
        </ul>
    </>
  );
}
export default Share;

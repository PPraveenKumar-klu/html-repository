function MyForm() {
  //   function handleChange(e) {
  //     console.log(e.target.value);
  //     alert(e.target.value);
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    alert(e.target.name.value);
    // alert("Form Submitted");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default MyForm;

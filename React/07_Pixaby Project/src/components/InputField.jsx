const InputField = ({ setText, text }) => {
  return (
    <>
      <div className="field">
        <input
          type="text"
          required
          name="search"
          autoComplete="off"
          value={text.search}
          onChange={(e) => setText(e)}
        />
        <label htmlFor="">Search for images</label>
        <div className="border1"></div>
        <div className="border2"></div>
      </div>
      <div className="images">
        <h2 className="no_of_img">Images</h2>
        <select name="images" value={text.images} onChange={(e) => setText(e)}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
    </>
  );
};

export default InputField;

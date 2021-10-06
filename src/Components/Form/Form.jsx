import { useState } from "react";
import { FormStyled, InputStyled } from "./Form.styled";

function SearchForm({ onSubmit }) {
  const [searchFieldvalue, setSearchFieldvalue] = useState("");

  const handleFieldChange = (e) => {
    setSearchFieldvalue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchFieldvalue.trim() === "") {
      alert("Вы ввели пустое поле");
      return;
    }
    onSubmit(searchFieldvalue);
    setSearchFieldvalue("");
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        value={searchFieldvalue}
        onChange={handleFieldChange}
        autoComplete="off"
        autoFocus
        placeholder=""
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </FormStyled>
  );
}

export default SearchForm;

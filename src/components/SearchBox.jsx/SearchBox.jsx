export const SearchBox = ({ userHandleSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    userHandleSubmit(form.elements.usersearch.value);
    // setSearchParams({ usersearch: form.elements.usersearch.value });
    // form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="usersearch" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

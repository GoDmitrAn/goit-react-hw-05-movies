import PropTypes from 'prop-types';
export const SearchBox = ({ userHandleSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    userHandleSubmit(form.elements.usersearch.value);
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
SearchBox.propTypes = {
  userHandleSubmit: PropTypes.func.isRequired,
};

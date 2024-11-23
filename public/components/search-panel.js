const SearchPanel = () => {
    const searchText = "Type here to search"
    const searchStyle = {
      fontSize: "20 px"
    };
  
    return <input
    style = {searchStyle}
    placeholder = {searchText}
    disabled = {true}/>;
  }
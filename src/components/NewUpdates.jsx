import {useState, useEffect} from "react";
// Define a function for the component while making sure i'm  declaring the props parameter so that I can use props in  component
function NewUpdates (props) {
  //State to hold the data for the newsupdate
  const [newsData, setnewsData] = useState({
    searchterm: "",
  });

  //handleChange - updates newsupdateData when we search for news
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setnewsData({ ...newsData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on submission
    event.preventDefault();
    //pass the search term to newssearch prop, which is apps getNews function
    props.newssearch(newsData.searchterm);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={newsData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default NewUpdates;
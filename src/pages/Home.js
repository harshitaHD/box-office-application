import React, { useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPage from '../components/MainPage'
import ShowGrid from '../components/show/ShowGrid';
import { Searches } from '../components/Styled';
import { apiGet } from '../misc/Config';
import { useLastQuery } from '../misc/Custom-hooks';

const Home = () => {
const[input, setInput]= useLastQuery( );
const[results, setResults] = useState(null);
const[searchOption, setSearchOption] = useState('shows')


const isShowSearch = searchOption ==='shows';

const onSearch = () =>{

  apiGet(`/search/${searchOption}?q=${input}`).then(result=>{
    setResults(result)
  // https://api.tvmaze.com/search/shows?q=girls
  })
}


const onInputChange =(ev)=>{
setInput(ev.target.value);
}


const onKeyDown =  (ev)=>{
  if(ev.keyCode===13){
    onSearch();
  }
}

const onRadioChange = (ev) =>{
setSearchOption(ev.target.value)
}

const renderResults = ( ) =>{
  if(results && results.length === 0){
    return <div>No results</div>
  }

  if(results && results.length >0){
    return results[0].show
    ?<ShowGrid data={results}/>
    :<ActorGrid data={results}/>
  }
  return null;
}

  return (
    <MainPage>

<Searches>
<center>
<div className='labels'>
<label htmlFor='shows-search'>
Shows
<input id = 'shows-search'
type='radio' 
value='shows' 
checked={isShowSearch}
onChange={onRadioChange}
/>
</label>

<label htmlFor='actors-search'>
Artists
<input id='actors-search' 
type='radio' 
value='people' 
checked={!isShowSearch}
onChange={onRadioChange}
/>
</label>
</div>
</center>
<center>
<input type='text' 
      onChange={onInputChange} 
      onKeyDown={onKeyDown} 
      value={input}
      />
      

<i className="fa-solid fa-magnifying-glass" onClick={onSearch} ></i>
      {renderResults()}
      </center>
</Searches>
    </MainPage>
  )
}

export default Home

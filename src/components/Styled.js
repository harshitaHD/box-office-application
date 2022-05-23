import styled from 'styled-components'

export const FlexGrid =styled.div`
display: flex;
justify-content:center;
flex-wrap:wrap;
`;

export const SearchCard = styled.div`
width:300px;
height:100%;
margin: 0 15px 40px;

.img-wrapper{
    width:100%;
    border-radius:50px;
    height:420px;
    overflow:hidden;
    border:1px solid #ddd;

img{
    object-fit:cover;
    height:100%;
    width:100%;
}    
}

h1{
    margin: 10px 0;
    font-size:21px;
}

p{
    margin:0;
}
`;

export const Star = styled.div`
display:inline-block;
height:18px;
width:18px;
background-color: ${ props=>(props.active ? '#ffc806' : '#ddd') };
clip-path:polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%

);
`;

export const NavLinks = styled.div`

    background-color: #333;
    overflow: hidden;
    margin-bottom: 15px;
    list-style: none;
    display: flex;
    justify-content: center;

  
a {
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
a:hover {
    background-color: hotpink;
    color: black;
    font-weight:bold;
  }

`;

export const Searches = styled.div`

input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  label {
    display: inline-block;
    background-color: #ddd;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 16px;
    border: 2px solid black;
    border-radius: 4px;
}

input[type="radio"]:focus + label {
    border: 2px dashed pink;
}

label:hover {
    background-color: hotpink;
  }


input[type=text]{
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 1pc;
    height: 1.5pc;
    font-size: 1pc;
    width: 25%;
}

.fa-magnifying-glass{
    height: 1.5pc;
    margin: 5px;
}
`;

export const TitlePage = styled.div`
h1{
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 1000;
}

p{
    font-weight: 1000;
    text-align: center;
}
`
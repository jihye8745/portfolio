import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Newsitem from './Newsitem';

const Nlist = ({category}) => {

  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    const data = async ()=>{
      // npm install axios
      // api 패치 2번에 나눠서 할 거를 한번에 해주는 라이브러리
  
      let query = category === "all" ? "" : `&category=${category}`
      let url = `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=241da8e273c343f9bbff4c77c314aab8`
  
      // try ... catch 문 : 에러를 처리하기 위해 사용하는 구문
      /*
      try {에러가 발생할 가능성이 있는 코드} catch(error){에러가 발생했을 때 실행되는 코드}
      */
      try {
        let response = await axios.get(url)
        console.log(response.data.articles)
        setArticles(response.data.articles || [])
      } catch (error) {
        console.log("error")
        setArticles([])
      }  
    } 
    data();  
  },[category])

  

  return (
    <div className='newslist'>
      {
        articles.map((article, index)=>(
          <Newsitem key={index} article={article}/>
        ))
      }
    </div>
  )
}

export default Nlist

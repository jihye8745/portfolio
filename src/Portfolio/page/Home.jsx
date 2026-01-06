import React, {useState} from 'react'
import Put from '../component/Put';
import CommentList from '../component/CommentList';

const Home = () => {

  const [comment, setComment] = useState([]);

  const addComment = (inputValue) => {
    const newComment = {id: Date.now(), inputValue}
    setComment([...comment, newComment])
  };

  return (
    <div className='home'>
      <div className="post">
        <h3>최근게시물</h3>
        <div className="p_left">
          <ul>
            <li>
              <span>Project</span>
              <span>모머위켄드 웹 리디자인</span>
            </li>
            <li>
              <span>Project</span>
              <span>코엑스 클론코딩</span>
            </li>
            <li>
              <span>Project</span>
              <span>교통민원24 UIUX</span>
            </li>
          </ul>
        </div>
        <div className="p_right">
          <ul>
            <li>
              <span>쥬크박스 0/3</span>
              <span>사진첩 5/50</span>
            </li>
            <li>
              <span>즐겨찾기 0/3</span>
              <span>방명록 3/20</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="room">
        <h3>미니룸</h3>
          <div className="room_img">
            <figure>
              <img src="/home/miniroom.jpg" alt="room" />
            </figure>
          </div>
      </div>

      <div className="comment">
        <h3>일촌평</h3>
        <Put addComment={addComment}/>
        <div className="comment_text">
          <CommentList comment={comment}/>
        </div>
      </div>
    </div>
  )
}

export default Home

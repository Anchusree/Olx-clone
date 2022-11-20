import React, { Fragment, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../Store/FirebaseContext';
import './Create.css';

const Create = () => {

  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()

  const [name, setName] = useState('');
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState(null)
  const date = new Date()

  const handleSubmit = ()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name,category,price,url,userId:user.uid,createdAt:date.toDateString()
        })
        history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <div>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="Price">Price</label>
          <br />
          <input className="input" type="number" id="Price" name="Price"
            value={price} onChange={(e) => setPrice(e.target.value)} />
          <br />

          <br />
          {image && <img alt="posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>}


          <br />
          <input type="file"
            onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>Upload and Submit</button>

        </div>
      </div>
    </Fragment>
  );
};

export default Create;

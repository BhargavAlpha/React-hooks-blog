import { firestore } from '../firebase';
import { useInputHandler } from '../hooks';
import { addDoc, collection } from 'firebase/firestore';


function CreatePost() {
  const title = useInputHandler('');
  const subTitle = useInputHandler('');
  const content = useInputHandler('');

  function handleSubmit (e) {
    e.preventDefault();
    console.log(title)
    console.log(subTitle)
    console.log(content)
    addDoc(collection(firestore, 'posts'), {
      title: title.input,
      content: content.input,
      subTitle: subTitle.input,
      createdAt: new Date(),
    });
      
  };
  

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

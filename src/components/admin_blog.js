import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Adminblog = () => {
  //Tour Hot
  const [newBlog, setNewBlog] = useState({});
  const [newDataBlog, setNewDataBlog] = useState({});
  const link="images/";
  const {
    addBlog,
    blog,
    deleteBlog,
    updateBlog,
    cancelEditBlog,
    editModeBlog
  } = useContext(AppContext);

  const addFileBlog = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewBlog({
      ...newBlog,
      [field]: event.target.files[0].name,
    });
  };

  const addNewBlog = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewBlog({
      ...newBlog,
      [field]: value,
    });
  };

  const addBlogBlog = (e) => {
    e.preventDefault();
    addBlog(newBlog);
    e.target.reset();
  };

  const deleteTourBlog = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteBlog(id);
    }
  };

  const saveBtnBlog = () => {
    updateBlog(newDataBlog);
  };

  const updateNewDataBlog = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewDataBlog({
      ...newDataBlog,
      [field]: value,
    });
    console.log(newDataBlog);
  };

  const updateNewFileBlog = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewDataBlog({
      ...newDataBlog,
      [field]: event.target.files[0].name,
    });
  };

  const Edit = (id_blog, img_blog, author_blog, time_blog, title_blog,content_blog) => {
    setNewDataBlog({ id_blog, img_blog, author_blog, time_blog, title_blog,content_blog });
    editModeBlog(id_blog);
  };
  

  return(
    <div className="container">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_hot">
                <button id="add_hot" className="btn btn-primary">Add Blog</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Author</th>
                        <th>Img</th>
                        <th>Time</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
      {blog.map(({ id_blog, img_blog, author_blog, time_blog, title_blog,content_blog, isEditing }) => {
  return isEditing === true ? (
    <tr key={id_blog}>
    <td> 
        <input
          type="text"
          name="author_blog"
          defaultValue={author_blog}
          onChange={(event) => updateNewDataBlog(event)}
        />
      </td>
    <td>  <input
          type="file"
          name="img_blog"
          onChange={(event) => updateNewFileBlog(event)}
        /></td>
    <td><input
       type="text"
       name="time_blog"
       defaultValue={time_blog}
       onChange={(event) => updateNewDataBlog(event)}
       /></td>
    <td> <input
          type="text"
          name="title_blog"
          defaultValue={title_blog}
          onChange={(event) => updateNewDataBlog(event)}
        /></td>
    <td> <input
          type="text"
          name="content_blog"
          defaultValue={content_blog}
          onChange={(event) => updateNewDataBlog(event)}
        /></td>
    <td><button onClick={() => saveBtnBlog()} className="btn btn-success bt">SAVE</button></td>
    <td><button onClick={() => cancelEditBlog(id_blog)} className="btn btn-success bt">CANCEL</button></td>
    </tr> 
  ) : (
     <tr key={id_blog}>
     <td>{author_blog}</td>
     <td><img src={link+img_blog} height={200} width={250} /></td>
     <td>{time_blog}</td>
     <td>{title_blog}</td>
     <td>{content_blog}</td>
     <td><button onClick={() => Edit(id_blog, img_blog, author_blog, time_blog, title_blog,content_blog)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourBlog(id_blog)} className="btn btn-success bt">DELETE</button></td>
     </tr> 
  )
})}
</tbody>
</table>
</div>
</div>
{/* Tour hot */}
          <div className="modal fade" id="Modal_hot" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Add tour </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="close">
                      <span aria-hidden="true">× </span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <form className="insertForm" onSubmit={addBlogBlog}>
                  <div className="col-12 mt-3">
                        <input type="file" className="form-control" onChange={(event) => addFileBlog(event)} placeholder="Img" name="img_blog" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"  onChange={(event) => addNewBlog(event)} placeholder="Author" name="author_blog" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control"  onChange={(event) => addNewBlog(event)} placeholder="Time" name="time_blog" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewBlog(event)} placeholder="Title" name="title_blog" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewBlog(event)} placeholder="Content" name="content_blog" />
                      </div>
                      <button type="submit" id="save_hot" className="btn btn-primary" name="save_hot">Save</button>
                    </form></div>
                  <div className="modal-footer">
                   
                    <button type="button" id="Cancle_hot" data-dismiss="modal" className="btn btn-danger">Cancle</button>
                  </div>
                </div>
              </div>
            </div>
            {/* end Hot */}
</div>
);
    };
export default Adminblog;

        
          
import React, { useEffect, useState } from 'react'
import { getall, total_pro, deletePro } from "../server/ProductServer"
import "bootstrap/dist/js/bootstrap"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Products = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState([]);
  const [currPage, setcurrPage] = useState(1);
  const [show, setShow] = useState(false);
  const [modal_data, setmodal_data] = useState();
  const handleClose = () => {

    setShow(false)
  };
  const handleShow = (item) => {

    setmodal_data(item)

    setShow(true)
  };

  useEffect(() => {
    const fetch = async () => {
      let res = await getall(currPage)
      let TotalPro = await total_pro();
      console.log("Tong san pham", TotalPro);
      let TotalPage = Math.ceil(TotalPro.data / 5)
      let range = [];
      for (let i = 1; i <= TotalPage; i++) {
        range.push(i);
      }
      setPage(range);
      console.log(range)
      setProduct(res.data)
    }
    fetch();


  }, [currPage])
  const selectPage = (item) => {
    setcurrPage(item)

  }
  const DeleteProCart = async (cartIem) => {
    await deletePro(cartIem.product_ID);
    let convert = product;
    convert = convert.filter(item => item.product_ID !== cartIem.product_ID)
    setProduct(convert);

    console.log(cartIem)
    toast.error(`Đã Xoá ${cartIem.product_Name} Ra Khỏi Giỏ Hàng`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      Transition: "slide"
    });
    handleClose();
  }

  console.log(page)
  return (
    <div>
      <h2 className="page-header" style={{ display: "flex", alignItems: "center" }}>
        PRODUCTS
        <div className="topnav__search" style={{ width: "400px", marginLeft: "1200px" }}>
          <input type="text" placeholder='Search here...' />
          <i className='bx bx-search'></i>
        </div>
      </h2>
      <div className="row">
        {
          <Link to="/addproduct">
            <button style={{ width: "250px", height: "50px", background: "#33CCCC", color: "white", borderRadius: "10px", marginBottom: "15px", marginLeft: "13px", fontSize: "20px", alignItems: "center" }}>
              <i style={{ marginRight: "15px" }} class="bi bi-plus-circle-fill"></i>
              Thêm Sản Phẩm
            </button>
          </Link>
        }

        <div className="col-12">
          <div className="card">

            <div className="card__body">
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Name</th>
                      <th>Ảnh</th>
                      <th>Giá</th>
                      <th>Nhà Sản Xuất</th>
                      <th>Phân Loại</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      product.map((item, index) => {
                        return (
                          <tr key={item.product_ID}>
                            <td>{index + 1}</td>
                            <td style={{ width: "250px" }}>{item.product_Name}</td>
                            <td><img src={item.thumnail} alt="1" width="150px" /></td>
                            <td>{new Intl.NumberFormat('vie-DE', { style: 'currency', currency: 'VND' }).format(item.price)}</td>
                            <td>{item.producer_ID}</td>
                            <td>{item.category_ID}</td>
                            <td><button onClick={() => handleShow(item)} style={{ width: "40px", height: "40px", background: "#CC3333", color: "white", borderRadius: "10px" }}><i className="bi bi-trash3"></i></button></td>
                            <td><Link to={`/updateproduct/${item.product_ID}`} ><button style={{ width: "40px", height: "40px", background: "#33CCCC", color: "white", borderRadius: "10px" }}><i class="bi bi-pencil-square"></i></button></Link></td>
                          </tr>
                        )

                      })
                    }
                  </tbody>

                </table>
              </div>
              {

                page.length > 1 ? (
                  <div className="table__pagination">
                    {
                      page.map((item) => (
                        <div key={item} className={`table__pagination-item ${currPage === item ? 'active' : ''}`} onClick={() => selectPage(item)}>
                          {item}
                        </div>
                      ))
                    }
                  </div>
                ) : null
              }
            </div>
          </div>
        </div>
      </div>
      {
        modal_data &&
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete This Product</Modal.Title>
          </Modal.Header>
          <Modal.Body> Are you sure delete {modal_data.product_Name}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => { DeleteProCart(modal_data) }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      }

    </div>

  )
}

export default Products
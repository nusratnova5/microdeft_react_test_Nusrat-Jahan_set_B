import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const addProduct = () => 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        }).then(async (result)  =>  {
            if (result.isConfirmed) {
                try {
                    const token = localStorage.getItem('token');        
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    };

                    const response = await axios.post('https://react-interview.1putym.easypanel.host/api/product');
                    console.log('Product created successfully:', response);
                    if (response.data.acknowledged) {
                        Swal.fire({
                            text: "Product added successfully.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    console.error('Error creating user:', error.response ? error.response.data : error.message);
                }
                   
            }
        });

    }
    
    return (
        <form >
            <div className="bg-base-200 min-h-screen">
                <div className="">
                    <div className="card bg-base-100 w-[40%] mx-auto shrink-0 shadow-2xl rounded-none">
                        <form onSubmit={addProduct} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock</span>
                                </label>
                                <input type="number" placeholder="Enter stock" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Enter price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discount</span>
                                </label>
                                <input type="number" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
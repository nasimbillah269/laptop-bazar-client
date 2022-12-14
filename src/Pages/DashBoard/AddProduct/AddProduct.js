import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const image = form.image.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const category = form.category.value;
        const laocation = form.laocation.value;
        const purchase = form.purchase.value;
        const description = form.description.value;
        const email = form.email.value;


        const addProduct = {
            productName,
            image, price,
            condition,
            phone,
            category,
            laocation,
            purchase,
            description,
            email
        }
        console.log(productName, image, price, condition, phone, category, laocation, purchase, description);
        fetch('https://laptop-bazar-server-theta.vercel.app/addProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Successfully Add Products ');
                    form.reset();
                    navigate('/dashboard/myproduct')

                }
            })
    }
    return (
        <div className='w-full ml-12 '>
            <h3 className='text-xl font-bold'>Add Product</h3>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} disabled className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="text" name="image" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">condition</span>
                    </label>
                    <select name="condition" className="select select-bordered w-full max-w-xs " required>
                        <option >excellent</option>
                        <option>good</option>
                        <option>fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" name="phone" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Year of purchase</span>
                    </label>
                    <input type="text" name="purchase" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text" name="description" className="textarea textarea-bordered w-full max-w-xs" placeholder="Messeage"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">category</span>
                    </label>
                    <select name="category" className="select select-bordered w-full max-w-xs " required>
                        <option >Asus</option>
                        <option>HP</option>
                        <option>DELL</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name="laocation" className="input input-bordered w-full max-w-xs" required />
                    <input className='btn btn-accent w-full mt-4 text-white font-semibold' value="Add Product" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
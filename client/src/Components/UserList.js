const UserList = () => {
    return (
        <div>
        
            <div className="col-6 text mx-auto">
                <div className="card-header"></div>
                <h1>User List!</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Role</td>
                    <td>Action</td>
                    </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default UserList;
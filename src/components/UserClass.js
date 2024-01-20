import React from "react";
import UserContext from "../utils/context/UserContext";
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            location: "",
            avatar_url: ""
        }
    }

    async componentDidMount() {
        console.log("child component did mount")

        const data = await fetch("https://api.github.com/users/venkatarajeshjakka");
        const json = await data.json();
        const { name, location, avatar_url } = json;
        this.setState({
            name: name,
            location: location,
            avatar_url: avatar_url
        })

    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component will Unmount");
    }

    render() {
        return (<div className="user-card">
            <img src={this.state.avatar_url} />
            <h2>Name: {this.state.name}</h2>
            <h3>Location: {this.state.location}</h3>
            <h4>Contact: venkatarajeshjakka@outlook.com</h4>
            <div>
                <UserContext.Consumer>
                    {(data) => console.log(data)}
                </UserContext.Consumer>
            </div>
        </div>)
    }
}

export default UserClass;
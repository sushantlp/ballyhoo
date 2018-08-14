import React from "react";

import Image from "./imageComponent/image";
import Map from "./mapComponent/map";
import Content from "./contentComponent/content";

export default class DetailView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apiType: 0,
			apiState: false
		};
	}

	componentDidMount() {
		if (this.props.history.location.state !== undefined) {
			this.setState({
				apiType: 1
			});

			console.log(this.props.history.location.state);
		} else {
			this.setState({
				apiState: true
			});
		}
	}

	render() {
		return (
			<div>
				<Image history={this.props.history} />
				<Content history={this.props.history} />
			</div>
		);
	}
}

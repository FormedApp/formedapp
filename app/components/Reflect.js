import React, {Component} from 'react';

class Activity extends React.Component {
	render() {
		return (
			<div class="activity reflect">
				<span class="activity-label">Reflect</span>
				<p>Possimus praesentium, vitae est minima nam ipsam mollitia eligendi numquam veniam dolore delectus?</p>
				<div class="form-group">
					<div class="checkbox">
						<label>
							<input type="checkbox"/> Yes 
						</label>
						<br>
						<label>
							<input type="checkbox"/> No
						</label>
					</div>
				</div>
			</div>
		);
	}
}

export default Activity;
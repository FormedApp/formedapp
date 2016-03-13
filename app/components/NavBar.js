import React, {Component} from 'react';

class NavBar extends React.Component {
  render() {
    return (
  		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<i class="fa fa-ellipsis-v"></i>
					</button>
					<a class="navbar-brand" href="#"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 340.468 340.468" enable-background="new 0 0 340.468 340.468" xml:space="preserve"><circle fill="#F3C615" cx="170.234" cy="170.234" r="170.234"/><polyline fill="#C7A412" points="151.923,85.739 192.245,112.173 171.185,144.47 137.394,101.052 "/><g><defs><polygon id="SVGID_1_" points="104.651,314.287 122.771,335.7 188.967,345.455 240.53,331.867 318.223,276.123 342.611,220.031 355.85,173.346 350.972,144.08 233.019,43.237 173.748,99.67 169.282,137.289 168.946,144.977 "/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><circle clip-path="url(#SVGID_2_)" fill="#C7A412" cx="170.234" cy="170.234" r="170.234"/></g><path fill="#27B899" d="M165.874,117.121"/><path fill="#27B899" d="M214.562,67.436"/><g><path fill="#27B899" d="M170.524,100.264c16.581-76.869,62.495-57.027,62.495-57.027S248.701,91.766,170.524,100.264z"/><g><path fill="#27B899" d="M175.478,156.003c-1.653,0-2.48,0-4.133,0c-6.152-18.887-5.805-40.33,0-59.219c1.653,0,2.48,0,4.133,0C169.672,115.674,169.327,137.114,175.478,156.003z"/></g><path fill="#27B899" d="M168.622,116.316c-42.829-6.204-33.667-32.161-33.667-32.161S161.008,73.714,168.622,116.316z"/></g><polygon fill="#C33929" points="265.365,137.289 265.365,183.344 244.82,183.344 235.822,314.287 104.651,314.287 95.647,183.344 75.103,183.344 75.103,137.289 "/><polygon fill="#A12E1E" points="169.282,137.289 169.282,314.287 235.822,314.287 244.82,183.344 265.365,183.344 265.365,137.289 "/><polygon fill="#A12E1E" points="244.677,185.429 95.79,185.429 95.647,183.344 244.82,183.344 "/><polygon fill="#852313" points="244.748,185.429 169.355,185.429 169.282,183.344 244.82,183.344 "/></svg></a>
					<span class="view-title">Formed</span>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li class="community"><a href="#">Community</a></li>
						<li class="activity"><a href="#">Activity</a></li>
						<li class="journal"><a href="#">Journal</a></li>
						<li class="user"><a href="#">User</a></li>
						<li class="leader"><a href="#">Leader</a></li>
					</ul>
				</div>
			</div>
		</nav>
    );
  }
}

export default NavBar;
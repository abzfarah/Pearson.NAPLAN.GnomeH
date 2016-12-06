import React from 'react'
import { Box } from '../components/common'


class LandingPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Box className="Site-content">
<main className="Site-content">
		<div>
			<h2>NAPLAN 2017</h2>
			<div>
				<p className="white-text"  className="white-text">This is the landing page for the NAPLAN 2017 Victoria Registration website. </p>
                <h2  className="white-text">What is Lorem Ipsum?</h2>
				<p  className="white-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
				<p  className="white-text">In the example below, the container is set to the height of the window, and the content area is told to expand as n
                eeded. <em>(Note: in the vertical direction you need to specify a height for the container. This is different from the 
                horizontal direction, which automatically expands to fit.)</em></p>

				<h2>The HTML</h2>

				<pre><code><span >&lt;<span>body</span> <span >class</span>=<span>"Site"</span>&gt;</span>
  <span>&lt;<span >header</span>&gt;</span>…<span >&lt;/<span >header</span>&gt;</span>
  <span>&lt;<span >main</span> <span>class</span>=<span >"Site-content"</span>&gt;</span>…<span >&lt;/<span>main</span>&gt;</span>
  <span >&lt;<span>footer</span>&gt;</span>…<span >&lt;/<span>footer</span>&gt;</span>
<span>&lt;/<span >body</span>&gt;</span>
</code></pre>
				<h2  className="white-text">The CSS</h2>
				<p  className="white-text">View the full <a href="https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css">source</a> for the <code>Site</code> component used in this demo on Github.</p>
				<aside  className="white-text">
					<strong>Note:</strong>&nbsp; the CSS required to make this demo work cross-browser is slightly different from the CSS shown in the example above, which assumes a fully spec-compliant browser. See the <a href="">comments in the source</a> for more details.
				</aside>
			</div>
		</div>
	</main>
    
      </Box>
    )
  }
}

export default LandingPage


import React from 'react'
import Layout from '../../components/Layout'
import { navigate } from 'gatsby-link'


export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

 handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  let url = "https://intcountcorsanywhere.herokuapp.com/https://sendcontactemail.herokuapp.com/sendContactEmail";

  let formFields =  {name: data.get('name'), email: data.get('email'), message: data.get('message')}
    console.log(formFields);

  try {

    let fetchOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formFields),
    };
    console.log(JSON.stringify(formFields));
  
      await fetch(url, fetchOptions).then(() => navigate("/contact/thanks/"))
      .catch((error) => alert(error));
    // Optionally, you can clear the form fields here
    data.reset();
  } catch (error) {
    console.error(`An error has occurred ${error}`);
  }
}

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content" style={{width: '60vw', margin: '1em auto'}}>
              <h1>Contact</h1>
              <form id="contact" onSubmit={this.handleSubmit} action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
             
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
    }
  }

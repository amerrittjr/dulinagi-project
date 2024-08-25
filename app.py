from flask import Flask, render_template, request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

@app.route('/')
def contact_form():
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    name = request.form['name']
    phone = request.form['phone']
    message = request.form['message']
    
    # Email details
    sender_email = "your_email@gmail.com"  # Your email address
    receiver_email = "contactaxecleaning@gmail.com"  # The email address you want to receive the form data at
    password = "your_password"  # Your email password
    
    # Email message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = "New Contact Form Submission"
    
    body = f"""
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Message:</strong><br>{message}</p>
    """
    
    msg.attach(MIMEText(body, 'html'))
    
    try:
        # Connect to the server and send the email
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, password)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        return "Thank you! Your message has been sent."
    except Exception as e:
        return f"Sorry, there was an error sending your message. Error: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
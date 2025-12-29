import React, { useState } from 'react';

const FeedbackForm = () => {
    // Initialize form data state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    });

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validate required fields
        if (!formData.name.trim() || !formData.feedback.trim()) {
            alert('Please fill in all required fields: Name and Feedback');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        const confirmationMessage = `
Name: ${formData.name}
Email: ${formData.email}
Rating: ${formData.rating ? `${formData.rating}/5` : 'Not provided'}
Feedback: ${formData.feedback}
        `;
        
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        
        if (isConfirmed) {
            console.log('Submitting feedback:', formData);
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
            });
            
            alert('Thank you for your valuable feedback!');
        }
    };

    // Inline CSS Styles
    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: '#f0f2f5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        },
        nav: {
            backgroundColor: '#2c3e50',
            color: 'white',
            width: '100%',
            padding: '20px 0',
            textAlign: 'center',
            marginBottom: '30px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        navTitle: {
            fontSize: '2.2rem',
            fontWeight: '700',
            margin: '0',
            letterSpacing: '1px',
        },
        navSubtitle: {
            fontSize: '1rem',
            opacity: '0.8',
            marginTop: '5px',
        },
        form: {
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '40px',
            width: '100%',
            maxWidth: '600px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0',
        },
        heading: {
            color: '#2c3e50',
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '5px',
            textAlign: 'center',
        },
        subheading: {
            color: '#7f8c8d',
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '30px',
        },
        inputGroup: {
            marginBottom: '25px',
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            color: '#2c3e50',
            fontWeight: '600',
            fontSize: '1rem',
        },
        required: {
            color: '#e74c3c',
            marginLeft: '3px',
        },
        input: {
            width: '100%',
            padding: '12px 15px',
            border: '2px solid #ddd',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease',
            boxSizing: 'border-box',
        },
        inputFocus: {
            borderColor: '#3498db',
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)',
        },
        textarea: {
            width: '100%',
            padding: '12px 15px',
            border: '2px solid #ddd',
            borderRadius: '8px',
            fontSize: '1rem',
            minHeight: '120px',
            resize: 'vertical',
            transition: 'border-color 0.3s ease',
            boxSizing: 'border-box',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        },
        ratingContainer: {
            marginBottom: '25px',
        },
        ratingLabel: {
            display: 'block',
            marginBottom: '10px',
            color: '#2c3e50',
            fontWeight: '600',
            fontSize: '1rem',
        },
        ratingOptions: {
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
        },
        ratingOption: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '5px',
            borderRadius: '5px',
            transition: 'background-color 0.2s ease',
        },
        radioInput: {
            marginRight: '8px',
            cursor: 'pointer',
            width: '18px',
            height: '18px',
        },
        radioLabel: {
            cursor: 'pointer',
            fontSize: '1rem',
            color: '#34495e',
        },
        submitButton: {
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            padding: '14px 30px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '8px',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.3s ease',
            letterSpacing: '1px',
        },
        submitButtonHover: {
            backgroundColor: '#27ae60',
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 15px rgba(46, 204, 113, 0.3)',
        },
        characterCount: {
            textAlign: 'right',
            fontSize: '0.9rem',
            color: '#7f8c8d',
            marginTop: '5px',
        },
        maxLengthWarning: {
            color: '#e74c3c',
        },
        footer: {
            marginTop: '30px',
            textAlign: 'center',
            color: '#7f8c8d',
            fontSize: '0.9rem',
        },
    };

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <h1 style={styles.navTitle}>Customer Feedback Portal</h1>
                <p style={styles.navSubtitle}>Your opinion helps us improve our services</p>
            </nav>

            <form 
                onSubmit={handleSubmit} 
                style={styles.form}
            >
                <h2 style={styles.heading}>Share Your Feedback</h2>
                <p style={styles.subheading}>
                    Please provide your valuable feedback to help us serve you better
                </p>

                {/* Name Input */}
                <div style={styles.inputGroup}>
                    <label style={styles.label}>
                        Full Name <span style={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        onFocus={(e) => {
                            e.target.style.borderColor = styles.inputFocus.borderColor;
                            e.target.style.boxShadow = styles.inputFocus.boxShadow;
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = styles.input.borderColor;
                            e.target.style.boxShadow = 'none';
                        }}
                    />
                </div>

                {/* Email Input */}
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        onFocus={(e) => {
                            e.target.style.borderColor = styles.inputFocus.borderColor;
                            e.target.style.boxShadow = styles.inputFocus.boxShadow;
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = styles.input.borderColor;
                            e.target.style.boxShadow = 'none';
                        }}
                    />
                </div>

                {/* Rating System */}
                <div style={styles.ratingContainer}>
                    <label style={styles.ratingLabel}>Rate Your Experience</label>
                    <div style={styles.ratingOptions}>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <div 
                                key={rating} 
                                style={styles.ratingOption}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                <input
                                    type="radio"
                                    id={`rating-${rating}`}
                                    name="rating"
                                    value={rating}
                                    checked={formData.rating === rating.toString()}
                                    onChange={handleChange}
                                    style={styles.radioInput}
                                />
                                <label 
                                    htmlFor={`rating-${rating}`}
                                    style={styles.radioLabel}
                                >
                                    {rating} {rating === 1 ? 'Star' : 'Stars'}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Feedback Textarea */}
                <div style={styles.inputGroup}>
                    <label style={styles.label}>
                        Your Feedback <span style={styles.required}>*</span>
                    </label>
                    <textarea
                        name="feedback"
                        placeholder="Please share your detailed feedback here..."
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                        maxLength={500}
                        style={styles.textarea}
                        onFocus={(e) => {
                            e.target.style.borderColor = styles.inputFocus.borderColor;
                            e.target.style.boxShadow = styles.inputFocus.boxShadow;
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = styles.textarea.borderColor;
                            e.target.style.boxShadow = 'none';
                        }}
                    />
                    <div style={styles.characterCount}>
                        <span style={formData.feedback.length >= 450 ? styles.maxLengthWarning : {}}>
                            {formData.feedback.length}
                        </span>
                        /500 characters
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={styles.submitButton}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor;
                        e.target.style.transform = styles.submitButtonHover.transform;
                        e.target.style.boxShadow = styles.submitButtonHover.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = styles.submitButton.backgroundColor;
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    Submit Feedback
                </button>

                <div style={styles.footer}>
                    <p>All fields marked with <span style={styles.required}>*</span> are required</p>
                    <p>Your feedback is confidential and will be used for improvement purposes only</p>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;
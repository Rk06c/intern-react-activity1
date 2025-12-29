import React from 'react';
import useFetch from '../activity3/useFetch';

const FetchYogaData = () => {
    const [data] = useFetch('https://priyangsubanerjee.github.io/yogism/yogism-api.json');
    
    console.log(data); // Check data in console
    
    // Process data to extract all poses from courses
    const allYoga = data ? Object.values(data).flat().flatMap(session => session.scheduled || []) : [];
    
    // Inline CSS styles
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '40px auto',
            padding: '30px',
            backgroundColor: '#f8f9fa',
            borderRadius: '15px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        },
        heading: {
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '40px',
            fontSize: '2.8rem',
            fontWeight: '700',
            paddingBottom: '15px',
            borderBottom: '4px solid #9b59b6',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        listContainer: {
            listStyle: 'none',
            padding: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '30px',
        },
        listItem: {
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 8px 20px rgba(155, 89, 182, 0.1)',
            border: '1px solid #e9ecef',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
        },
        yogaName: {
            color: '#8e44ad',
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '20px',
            paddingBottom: '15px',
            borderBottom: '2px solid #f1f3f5',
        },
        paragraph: {
            marginBottom: '15px',
            color: '#2c3e50',
            fontSize: '1.05rem',
            lineHeight: '1.7',
        },
        strong: {
            color: '#9b59b6',
            fontWeight: '700',
            marginRight: '5px',
        },
        loading: {
            textAlign: 'center',
            fontSize: '1.3rem',
            color: '#9b59b6',
            padding: '60px',
            fontWeight: '600',
        },
        difficultyBadge: {
            position: 'absolute',
            top: '15px',
            right: '15px',
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Yoga Poses & Benefits</h1>
            
            {data ? (
                <ul style={styles.listContainer}>
                    {allYoga.map((yoga, index) => (
                        <li 
                            key={index} 
                            style={styles.listItem}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(155, 89, 182, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(155, 89, 182, 0.1)';
                            }}
                        >
                            <div style={styles.difficultyBadge}>
                                {yoga.category}
                            </div>
                            <h3 style={styles.yogaName}>{yoga.english_name}</h3>
                            <p style={styles.paragraph}>
                                <span style={styles.strong}>Description: </span>
                                {yoga.description}
                            </p>
                            <p style={styles.paragraph}>
                                <span style={styles.strong}>Benefits: </span>
                                {yoga.benefits}
                            </p>
                            <p style={styles.paragraph}>
                                <span style={styles.strong}>Duration: </span>
                                {yoga.time}
                            </p>
                            <p style={styles.paragraph}>
                                <span style={styles.strong}>Difficulty: </span>
                                {yoga.category}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div style={styles.loading}>Loading yoga data...</div>
            )}
        </div>
    );
};

export default FetchYogaData;
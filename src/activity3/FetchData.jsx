import React, { useEffect } from 'react';
import useFetch from '../activity3/useFetch';
import axios from 'axios';

const FetchDataWithAxios = () => {
    useEffect(() => {
        axios.get('https://api.npoint.io/9045c260b1565daa9e15')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Data fetched using Axios. Check console for details.</h1>
        </div>
    );
};

const FetchData = () => {
    const [data] = useFetch('https://api.npoint.io/9045c260b1565daa9e15');
    
    // Inline CSS styles
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        },
        heading: {
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '40px',
            fontSize: '2.5rem',
            fontWeight: '700',
            paddingBottom: '15px',
            borderBottom: '3px solid #3498db',
        },
        listContainer: {
            listStyle: 'none',
            padding: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '25px',
        },
        listItem: {
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e9ecef',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        fruitName: {
            color: '#2c3e50',
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '15px',
            paddingBottom: '10px',
            borderBottom: '2px solid #f1f3f5',
        },
        paragraph: {
            marginBottom: '12px',
            color: '#34495e',
            fontSize: '1rem',
            lineHeight: '1.6',
        },
        strong: {
            color: '#2c3e50',
            fontWeight: '600',
        },
        loading: {
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#7f8c8d',
            padding: '40px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Fruits Health Benefits</h1>
            
            {data ? (
                <ul style={styles.listContainer}>
                    {data.map((fruit, index) => (
                        <li 
                            key={index} 
                            style={styles.listItem}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <h3 style={styles.fruitName}>{fruit.name}</h3>
                            <p style={styles.paragraph}>
                                <span style={styles.strong}>Importance: </span>
                                {fruit.importance}
                            </p>
                            <p style={styles.paragraph}>
                                <span style={styles.strong}>Benefits: </span>
                                {fruit.benefits}
                            </p>
                            <p style={styles.paragraph}>
                                <span style={styles.strong}>Best Time to Eat: </span>
                                {fruit.best_time_to_intake}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div style={styles.loading}>Loading fruits data...</div>
            )}
            {/* Axios Fetch Data Component */}
            <FetchDataWithAxios />
        </div>
    );
};

export default FetchData;
export { FetchDataWithAxios };
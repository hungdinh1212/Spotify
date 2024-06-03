import React from 'react';
import MaterialIcon from 'material-icons-react';

const GoogleLogo = () => {
    return (
        <div style={styles.container}>
            <div style={{ ...styles.icon, ...styles.blue }}>G</div>
            <div style={{ ...styles.icon, ...styles.red }}>G</div>
            <div style={{ ...styles.icon, ...styles.yellow }}>G</div>
            <div style={{ ...styles.icon, ...styles.green }}>G</div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000',
    },
    icon: {
        fontSize: '100px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        position: 'absolute',
    },
    blue: {
        color: '#4285F4',
        left: '0px',
        top: '0px',
    },
    red: {
        color: '#EA4335',
        left: '20px',
        top: '0px',
    },
    yellow: {
        color: '#FBBC05',
        left: '40px',
        top: '0px',
    },
    green: {
        color: '#34A853',
        left: '60px',
        top: '0px',
    },
};

export default GoogleLogo;

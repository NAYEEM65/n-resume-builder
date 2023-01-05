import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/Layout';

const Templates = () => {
    return (
        <Layout>
            <Link to="/template/1">template1</Link>
            <Link to="/template/2">template2</Link>
        </Layout>
    );
};

export default Templates;

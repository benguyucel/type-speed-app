import { Modal } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import wordSlice from '../../redux/slice/wordSlice';
function ResultModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (

        <Modal title="Your Time is Up" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default ResultModal
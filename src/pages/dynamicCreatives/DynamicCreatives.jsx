import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { sendToDataBricks } from './../../apis';
import { BlobServiceClient } from '@azure/storage-blob';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {
  useMutation
} from '@tanstack/react-query';
const { Dragger } = Upload;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


function DynamicCreatives() {

  const [form] = Form.useForm();

  const {
    mutate,
    isLoading: isFetchingDatabricksResponse,
    data: respData,
    error
  } = useMutation(
    (payload)=> sendToDataBricks(payload),
  );

  const onFinish = (values) => {
    mutate({key: values});
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const handleUpload = (e) => {
    debugger;
  }

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const uploadFile = async (options) => {
    const {
      onSuccess, onError, file, onProgress
    } = options;

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    const accountName = '';
    const sasToken= '';
    const containerName = '';

    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`);
    const containerClient = blobServiceClient.getContainerClient(containerName);

    try {
      reader.onload = (
        async function () {
          const arrayBuffer = reader.result;
          const fileName = file.name;
          const blockBlobClient = containerClient.getBlockBlobClient(fileName);
          
        }
      )
    } catch (err) {
    
    }

  return (
    <div>
      <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Generate AI based Creatives</h2>
          <p>
            Please fill the following parameters below to generate Creative.
          </p>
        </div>
        <div className='row'>
          <div className='dynamic-creative-form'>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
              <Form.Item
                name="keywords"
                label="Keywords"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="logo"
                label="Logo"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="Upload the logo of Ad Offer."
              >
                <Dragger
                  accept=".jpg, .jpeg, .png"
                  customRequest={uploadFile}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Dragger>
                <Upload name="logo" action={handleUpload} listType="picture">
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DynamicCreatives;

import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

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
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e?.fileList;
  };

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
                <Upload name="logo" listType="picture">
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

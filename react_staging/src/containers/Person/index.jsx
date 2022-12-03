// 引入 connect 用于连接 redux 与 UI 组件
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction
} from '../../redux/actions/count'

import React, { Component } from 'react'
import css from './index.module.css'

import {
  Button,
  Space,
  Select,
  Card,
  Input,
  Form,
  Checkbox,
  Divider,
  List,
  Typography
} from 'antd'

class Person extends Component {
  state = {
    list: [
      { name: 'kx', age: 20 }
    ]
  }
  onFinish = (values) => {
    console.log('Success:', values)
  }

  render () {
    const { onFinish } = this
    const { list } = this.state
    return (
      <div className={css.container}>
        <Card
          size="small"
          title="Person"
          style={{
            width: 900,
            height: 1000
          }}
        >
          <Space>
            <Form
              name="basic"
              labelCol={{
                span: 8
              }}
              wrapperCol={{
                span: 16
              }}
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!'
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="age"
                name="age"
                rules={[
                  {
                    required: true,
                    message: 'Please input your age!'
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Space>
          <Divider orientation="left">Default Size</Divider>
          <List
            header={<div>学生列表</div>}
            bordered
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                name:{item.name} - age:{item.age}
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}

export default connect(
  (state) => ({ kx: state }),
  // 终极简写 API 层面的优化
  {
    jia: createIncrementAction,
    jian: createDecrementAction
  }
)(Person)

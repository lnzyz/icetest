import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Grid } from '@icedesign/base';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;

export default class Subscribe extends Component {
  static displayName = 'Subscribe';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        email: '',
      },
    };
  }

  formChange = (newValue) => {
    this.setState({
      formValue: newValue,
    });
  };

  subscribe = () => {
    this.form.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
    });
  };

  render() {
    return (
      <IceContainer>
        <FormBinderWrapper
          ref={(form) => {
            this.form = form;
          }}
          value={this.state.formValue}
          onChange={this.formChange}
        >
          <Row wrap>
            <Col xxs="1" s="6" l="8" />
            <Col xxs="16" s="8" l="6">
              <Row wrap>
                <Col span="24">
                    <Input
                      size="large"
                      name="server"
                      placeholder="请输入您查找的服务..."
                      style={{ width: '100%' }}
                    />
                </Col>
                <Col span="24" style={styles.error}>
                  <FormError name="email" />
                </Col>
              </Row>
            </Col>
            <Col xxs="6" s="4" l="2" style={{ textAlign: 'center' }}>
              <Button size="large" type="primary" onClick={this.subscribe}>
                查找
              </Button>
            </Col>
          </Row>
        </FormBinderWrapper>
      </IceContainer>
    );
  }
}

const styles = {
  error: {
    marginTop: '5px',
  },
};
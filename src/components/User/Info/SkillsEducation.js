import React from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Confirm, Notify } from 'notiflix';
function SkillsEducation() {
    return (
        <div>
            <h5>
                <b>Education</b>
            </h5>
            <hr />
            <Form.List name="education">
                {(fields, { add, remove }) => (
                    <>
                        <div>
                            {fields.map(({ key, name, ...restField }) => (
                                <div className="grid md:grid-cols-4 md:gap-6" key={key}>
                                    <div className="">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'level']}
                                            rules={[{ required: true, message: 'Missing level' }]}
                                        >
                                            <Input placeholder="level eg. S.S.C" />
                                        </Form.Item>
                                    </div>
                                    <div className="">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'group']}
                                            rules={[{ required: true, message: 'Missing group' }]}
                                        >
                                            <Input placeholder="group eg. Science" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-2">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'grade']}
                                            rules={[{ required: true, message: 'Missing grade' }]}
                                        >
                                            <Input placeholder="Grade eg. 5.00" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-3">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'institution']}
                                            rules={[
                                                { required: true, message: 'Missing institution' },
                                            ]}
                                        >
                                            <Input placeholder="Institution" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-3">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'board']}
                                            rules={[{ required: true, message: 'Missing board' }]}
                                        >
                                            <Input placeholder="Board eg. Dhaka" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-2">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'passingYear']}
                                            rules={[
                                                { required: true, message: 'Missing passing Year' },
                                            ]}
                                        >
                                            <Input placeholder="Passing Year eg. 2015" />
                                        </Form.Item>
                                    </div>
                                    <div className="w-fit">
                                        <MinusCircleOutlined
                                            style={{ fontSize: 25, color: 'tomato' }}
                                            onClick={() =>
                                                Confirm.show(
                                                    'Please Confirm!',
                                                    'Do you agree Remove this field',
                                                    'Yes',
                                                    'No',
                                                    () => {
                                                        remove(name);
                                                    },
                                                    () => {
                                                        Notify.info('cancel remove');
                                                    },
                                                    {
                                                        width: '320px',
                                                        borderRadius: '8px',
                                                        titleColor: '#fb923c',
                                                        okButtonBackground: '#fb923c',
                                                        cssAnimationStyle: 'zoom',
                                                    },
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add Education
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5>
                <b>Skills</b>
            </h5>
            <hr />
            <Form.List name="skills">
                {(fields, { add, remove }) => (
                    <>
                        <div className="w-full">
                            {fields.map(({ key, name, ...restField }) => (
                                <div className="flex justify-start items-center gap-2" key={key}>
                                    <div className=" w-full">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'technology']}
                                            rules={[
                                                { required: true, message: 'Missing first name' },
                                            ]}
                                        >
                                            <Input placeholder="Technology" />
                                        </Form.Item>
                                    </div>

                                    {/* <div className="col-md-4">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'rating']}
                                            rules={[
                                                { required: true, message: 'Missing first name' },
                                            ]}
                                        >
                                            <Input placeholder="Rating" />
                                        </Form.Item>
                                    </div> */}

                                    <div className="-mt-4">
                                        <MinusCircleOutlined
                                            style={{ fontSize: 25, color: 'tomato' }}
                                            onClick={() =>
                                                Confirm.show(
                                                    'Please Confirm!',
                                                    'Do you agree Remove this field',
                                                    'Yes',
                                                    'No',
                                                    () => {
                                                        remove(name);
                                                    },
                                                    () => {
                                                        Notify.info('cancel remove');
                                                    },
                                                    {
                                                        width: '320px',
                                                        borderRadius: '8px',
                                                        titleColor: '#fb923c',
                                                        okButtonBackground: '#fb923c',
                                                        cssAnimationStyle: 'zoom',
                                                    },
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add Skill
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    );
}

export default SkillsEducation;

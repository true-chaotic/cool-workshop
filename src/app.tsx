import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import { Formik } from 'formik';
import { Form, Field } from "formik";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    path: Yup.string().url('Not path').required('Required'),
    domain: Yup.string(),
  });

/*function PasswordInput(field: any) {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup size="md">
        <Input {...field}
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Password"
          id="password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
}*/

function FormikExample() {
 
    return (
      <Formik
        initialValues={{ login: "Sasuke", password: "", domain: "", path: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
        
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name="login">
              {({ field, form }: {field:any, form:any}) => (
                <FormControl isInvalid={form.errors.login && form.touched.login}>
                  <FormLabel htmlFor="login">SFTP login</FormLabel>
                  <Input {...field} id="login" placeholder="Login" />
                  <FormErrorMessage>{form.errors.login}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: {field:any, form:any}) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor="password">SFTP password</FormLabel>
                  <Input {...field} id="password" placeholder="password" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="domain">
              {({ field, form }: {field:any, form:any}) => (
                <FormControl isInvalid={form.errors.domain && form.touched.domain}>
                  <FormLabel htmlFor="domain">Path to filesource</FormLabel>
                  <Input {...field} id="domain" placeholder="Domain" />
                  <FormErrorMessage>{form.errors.domain}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="path">
              {({ field, form }: {field:any, form:any}) => (
                <FormControl isInvalid={form.errors.path && form.touched.path}>
                  <FormLabel htmlFor="path">Path to filesource</FormLabel>
                  <Input {...field} id="path" placeholder="Path" />
                  <FormErrorMessage>{form.errors.path}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
}

function App() {
// 2. Use at the root of your app
    return (
        <ChakraProvider>
            <Heading>Hello from React!</Heading>
            <FormikExample />
        </ChakraProvider>
    )
}

function render() {
    ReactDOM.render(<App />, document.getElementById('container'));
}

render();

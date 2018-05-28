# Create Sample Form Component
### Create a new file in `src/components` named `samplecomponent.js`
```
touch src/components/SampleComponent.js
```
### Copy/Paste the code below into the file
```js
import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormExampleForm
```
### Create a MD file
Create a MD file for `SampleComponent.js`
```
touch src/components/SampleComponent.md
```

### Add Component to MD file
Add the following code snippet to SampleComponent.md

    ```js
    <FormExampleForm />
    ```
### Check Styleguidist
- Start and stop your stylegudist server
- Refresh the page. You should see the sample component.
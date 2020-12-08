const url = "http://localhost:5000/persons";

const fetchPersons = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const createPerson = async (postBody) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postBody)
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const updatePerson = async (postBody) => {
  console.log(postBody);
  try {
    const response = await fetch(url + `/${postBody.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const deletePerson = async (personId) => {
  try {
    await fetch(url + `/${personId}`, {
      method: 'DELETE'
    });
  } catch (err) {
    console.log(err);
  }
};

const phonebooks = {
  getPersons: fetchPersons,
  addPerson: createPerson,
  deletePerson: deletePerson,
  updatePerson: updatePerson
};

export default phonebooks;

async function fetchTimeout(resource) {
  const timeout = 5000;

  const controller = new AbortController();
  const signal = controller.signal;
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    signal: signal
  }).catch(() => console.log(`Request timed out, please try again.`));

  clearTimeout(id);

  return response;
}

let resource = 'api/schedules';

// let schedule = await fetchTimeout();
let schedule = await fetchTimeout().then(res => res.json()).catch();
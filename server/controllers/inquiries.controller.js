const memoryInquiries = [];

export function createInquiry(req, res) {
  const { name, email, stateRegion, serviceId, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }
  const record = {
    id: 'inq-' + Date.now(),
    submittedAt: new Date().toISOString(),
    name,
    email,
    stateRegion,
    serviceId,
    message,
  };
  memoryInquiries.push(record);
  return res.status(201).json({ ok: true, inquiry: record });
}

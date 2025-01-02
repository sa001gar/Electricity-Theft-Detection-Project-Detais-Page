import React from 'react';
import CodeSnippet from './CodeSnippet';

const snippets = [
  {
    title: 'Anomaly Detection Model',
    language: 'Python',
    code: `def detect_anomaly(consumption_data):
    model = IsolationForest(contamination=0.1)
    predictions = model.fit_predict(consumption_data)
    return predictions == -1  # Returns True for anomalies`
  },
  {
    title: 'Real-time Monitoring',
    language: 'Arduino',
    code: `void loop() {
    float current = getCurrentReading();
    float voltage = getVoltageReading();
    
    if (isAnomalous(current, voltage)) {
        sendAlert();
    }
    
    delay(1000);
}`
  },
  {
    title: 'Data Processing Pipeline',
    language: 'Python',
    code: `@pipeline
def process_readings(data):
    cleaned = remove_noise(data)
    features = extract_features(cleaned)
    predictions = model.predict(features)
    return format_results(predictions)`
  }
];

export default function CodeSnippets() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Implementation Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snippets.map((snippet) => (
            <CodeSnippet key={snippet.title} {...snippet} />
          ))}
        </div>
      </div>
    </section>
  );
}
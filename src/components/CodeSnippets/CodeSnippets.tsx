import React from 'react';
import CodeSnippet from './CodeSnippet';

const snippets = [
  {
    title: 'ML Model Training',
    language: 'Python',
    code: `def train_theft_detection_model(data):
    model = Sequential([
        Dense(64, activation='relu', input_shape=(n_features,)),
        Dropout(0.3),
        Dense(32, activation='relu'),
        Dense(1, activation='sigmoid')
    ])
    
    model.compile(optimizer='adam', 
                 loss='binary_crossentropy',
                 metrics=['accuracy'])
    
    return model.fit(X_train, y_train, 
                    validation_split=0.2,
                    epochs=100)`
  },
  {
    title: 'Real-time Monitoring',
    language: 'Arduino',
    code: `void setup() {
    Serial.begin(9600);
    pinMode(CURRENT_PIN, INPUT);
    pinMode(VOLTAGE_PIN, INPUT);
    setupWiFi();
}

void loop() {
    float current = readCurrent();
    float voltage = readVoltage();
    float power = calculatePower(current, voltage);
    
    if (detectAnomaly(power)) {
        sendAlert();
    }
    
    delay(1000);
}`
  },
  {
    title: 'Data Processing Pipeline',
    language: 'Python',
    code: `def process_sensor_data(raw_data):
    # Clean and normalize data
    cleaned = remove_noise(raw_data)
    normalized = normalize_readings(cleaned)
    
    # Extract features
    features = extract_features(normalized)
    
    # Make prediction
    prediction = model.predict(features)
    
    if prediction > THEFT_THRESHOLD:
        trigger_alert(prediction)
    
    return prediction`
  }
];

export default function CodeSnippets() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">Technical Implementation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snippets.map((snippet) => (
            <CodeSnippet key={snippet.title} {...snippet} />
          ))}
        </div>
      </div>
    </section>
  );
}
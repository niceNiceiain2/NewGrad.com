export default function LessDemo() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 'bold' }}>
        Less CSS Preprocessor Demo
      </h1>
      
      <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
        This page demonstrates the Less CSS preprocessor features including variables, mixins, and nested styles.
      </p>

      {/* API Badges Demo */}
      <div className="api-card">
        <div className="api-card__header">
          <h2 className="api-card__title">API Method Badges</h2>
        </div>
        <div className="api-card__description">
          These badges use Less variables and the BEM naming convention with nested selectors.
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span className="api-badge api-badge--get">GET</span>
          <span className="api-badge api-badge--post">POST</span>
          <span className="api-badge api-badge--put">PUT</span>
          <span className="api-badge api-badge--delete">DELETE</span>
        </div>
      </div>

      {/* Custom Buttons Demo */}
      <div className="api-card">
        <div className="api-card__header">
          <h2 className="api-card__title">Custom Buttons with Mixins</h2>
        </div>
        <div className="api-card__description">
          These buttons are created using Less mixins that generate hover effects and transitions.
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" data-testid="button-primary">
            Primary Button
          </button>
          <button className="btn-success" data-testid="button-success">
            Success Button
          </button>
          <button className="btn-danger" data-testid="button-danger">
            Danger Button
          </button>
          <button className="btn-secondary" data-testid="button-secondary">
            Secondary Button
          </button>
        </div>
      </div>

      {/* Feature Highlight Demo */}
      <div className="feature-highlight">
        <h3>Gradient Background Feature</h3>
        <p>
          This card uses a Less mixin to create a gradient background from primary to secondary colors.
          The gradient direction and colors are all defined using Less variables.
        </p>
      </div>

      {/* Status Indicators Demo */}
      <div className="api-card">
        <div className="api-card__header">
          <h2 className="api-card__title">Status Indicators</h2>
        </div>
        <div className="api-card__description">
          Small status indicators with color variants defined by Less variables.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="status-indicator status-indicator--success"></span>
            <span>Success</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="status-indicator status-indicator--warning"></span>
            <span>Warning</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="status-indicator status-indicator--error"></span>
            <span>Error</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="status-indicator status-indicator--info"></span>
            <span>Info</span>
          </div>
        </div>
      </div>

      {/* Navigation Items Demo */}
      <div className="api-card">
        <div className="api-card__header">
          <h2 className="api-card__title">Interactive Navigation Items</h2>
        </div>
        <div className="api-card__description">
          These navigation items demonstrate Less nested selectors and hover effects.
          Hover over them to see the smooth transitions.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="nav-item active" data-testid="nav-home">
            <span className="icon">🏠</span>
            <span className="label">Home</span>
          </div>
          <div className="nav-item" data-testid="nav-docs">
            <span className="icon">📚</span>
            <span className="label">API Documentation</span>
          </div>
          <div className="nav-item" data-testid="nav-demo">
            <span className="icon">🎨</span>
            <span className="label">Less Demo</span>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="api-card">
        <div className="api-card__header">
          <h2 className="api-card__title">Less Features Used</h2>
        </div>
        <div className="api-card__code">
          <pre>{`// Variables
@primary-color: #3b82f6;
@spacing-md: 1rem;

// Mixins
.button-variant(@bg-color) {
  background-color: @bg-color;
  &:hover {
    background-color: darken(@bg-color, 10%);
  }
}

// Nested Selectors
.api-card {
  .card();
  
  &__header {
    .flex-between();
    border-bottom: 1px solid @border-color;
  }
  
  &__title {
    font-weight: 600;
  }
}`}</pre>
        </div>
      </div>

      {/* File Structure */}
      <div className="api-card">
        <div className="api-card__header">
          <h2 className="api-card__title">Less File Structure</h2>
        </div>
        <div className="api-card__description">
          The Less styles are organized into three main files:
        </div>
        <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>variables.less</strong> - Colors, spacing, typography, and other design tokens
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>mixins.less</strong> - Reusable style patterns like buttons, cards, and flexbox helpers
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>components.less</strong> - Component-specific styles that use variables and mixins
          </li>
        </ul>
      </div>
    </div>
  );
}

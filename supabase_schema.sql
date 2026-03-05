-- zavistone Macro Intelligence Engine DB Schema
-- Stage 3 Data Storage implementation

-- 1. User Authentication Logs & Access Control Table
CREATE TABLE user_access_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meta_user_id VARCHAR(255) NOT NULL,
    platform VARCHAR(50) NOT NULL CHECK (platform IN ('instagram', 'threads')),
    is_follower BOOLEAN NOT NULL DEFAULT false,
    last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Daily Final Verified Reports Archive
CREATE TABLE daily_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    report_date DATE NOT NULL UNIQUE,
    status VARCHAR(50) NOT NULL CHECK (status IN ('SUCCESS', 'ABORTED', 'INSUFFICIENT_DATA')),
    
    -- Content Layers
    confirmed_facts JSONB,
    verified_numerical_data JSONB,
    inference_layer TEXT,
    speculative_scenario JSONB,
    
    -- Scenario Modeling
    base_scenario JSONB,
    bull_scenario JSONB,
    bear_scenario JSONB,
    
    -- Signals & Audit
    reliability_index VARCHAR(20),
    red_team_audit JSONB,
    
    verification_hash TEXT, -- To ensure data immutability
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Failed Verifications Log (For Audit)
CREATE TABLE failed_verifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    report_date DATE NOT NULL,
    error_type VARCHAR(100) NOT NULL CHECK (error_type IN ('SINGLE_SOURCE', 'NUMERIC_MISMATCH', 'FORMAT_ERROR', 'HALLUCINATION_DETECTED')),
    conflict_data JSONB NOT NULL,
    sources_involved JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Audit constraints
ALTER TABLE failed_verifications ADD CONSTRAINT fk_report_date FOREIGN KEY (report_date) REFERENCES daily_reports(report_date) ON DELETE CASCADE;

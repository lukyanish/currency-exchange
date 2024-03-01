import { Type } from 'class-transformer';
import { Allow, IsNumber, IsString, ValidateNested } from 'class-validator';

export class ApplicationConfig {
    @Allow()
    @IsNumber()
    public readonly port!: number;
}

export class LoggerConfig {
    @Allow()
    @IsString()
    public readonly errorMaxFiles!: string;

    @Allow()
    @IsString()
    public readonly combinedMaxFiles!: string;
}

export class RootConfig {
    @IsString()
    public readonly NODE_ENV!: string;

    @Type(() => ApplicationConfig)
    @ValidateNested()
    public readonly application!: ApplicationConfig;

    @Type(() => LoggerConfig)
    @ValidateNested()
    public readonly logger!: LoggerConfig;
}

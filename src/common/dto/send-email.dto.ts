import { IsObject, IsNotEmpty, IsString, IsBoolean, IsOptional, IsNumber, IsPositive, IsEmail } from "class-validator";

export class MailOptions {
    @IsString()
    @IsNotEmpty()
    from: string;

    @IsEmail()
    @IsNotEmpty()
    to: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    html: string;

    @IsString()
    @IsOptional()
    text?: string;
}

export class SmtpAuth {
    @IsString()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
    pass: string;
}

export class SmtpConfig {
    @IsString()
    @IsNotEmpty()
    host: string;

    @IsNotEmpty()
    @IsNumber()
    port: number;

    @IsOptional()
    @IsBoolean()
    secure: boolean

    @IsObject()
    @IsNotEmpty()
    auth?: SmtpAuth;
}

export class SendEmailDto {
    @IsObject()
    @IsNotEmpty()
    mailOptions: MailOptions;

    @IsObject()
    @IsNotEmpty()
    smtpConfig: SmtpConfig;
}